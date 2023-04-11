import { projects } from '../stores/projects';

for (const [projectName, componentNames] of Object.entries(projects)) {
  console.log(`Project: ${projectName}`);
  for (const componentName of componentNames) {
    console.log(`  Component: ${componentName}`);
  }
}


export const defaultActiveRoutes = Object.entries(components).map(
  ([name, component]) => ({
    path: `/${name}`,
    name,
    component,
    children: [],
    meta: { isActive: true },
  })
);

export const HomePage = components.HomePage;
export const ErrorScreen = components.ErrorScreen;
