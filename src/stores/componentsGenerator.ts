// src/componentsGenerator.ts
import { Project, Component } from '@/stores/types';
import { projects } from './projects';

// Create a function to generate the array of Components
function generateComponents(projects: Project[]): Component[] {
  const components: Component[] = [];

  projects.forEach((project) => {
    project.components.forEach((component) => {
      const isActive = project.isActive && !component.startsWith('//');
      const componentName = component.replace(/^\/\//, '');
      const fileName = `${componentName}.vue`;
      const path = componentName
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .toLowerCase();
      const alias = `${project.name}_${componentName}`;
      const importPath = `() => import('../components/${project.folder}/${fileName}')`;

      components.push({
        projectName: project.name,
        componentName,
        fileName,
        isActive,
        path,
        alias,
        importPath,
      });
    });
  });

  return components;
}

// Export the generated array of Components
export const components: Component[] = generateComponents(projects);
