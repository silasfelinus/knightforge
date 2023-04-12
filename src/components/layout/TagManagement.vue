<template>
  <div class="tag-management">
    <h1>Tag Management</h1>
    <form @submit.prevent="addTag">
      <label for="tagName">Tag Name:</label>
      <input type="text" v-model="tagName" required />
      <button type="submit">Add Tag</button>
    </form>
    <h2>Tags:</h2>
    <ul>
      <li v-for="(tagId, tag) in Array.from(tags.entries())" :key="tagId">
        {{ tag.name }} <button @click="removeTag(tagId)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { TagManager } from '@/TagManager';
import { IDManager } from '@/IDManager';

const tagManager = new TagManager();
const idManager = new IDManager();

export default defineComponent({
  name: 'TagManagement',
  setup() {
    const tagName = ref('');
    const tags = computed(() => {
      const allTags = tagManager.getAllTags();
      const tagMap = new Map();
      allTags.forEach((tag, index) => {
        const tagId = index + 1;
        tagMap.set(tagId, tag);
      });
      return tagMap;
    });

    function addTag() {
      const newTagId = idManager.getNextId();
      tagManager.addTag(newTagId, { name: tagName.value });
      tagName.value = '';
    }

    function removeTag(tagId: number) {
      tagManager.removeTag(tagId);
    }

    return {
      tagName,
      tags,
      addTag,
      removeTag,
    };
  },
});
</script>

<style scoped>
.tag-management {
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 5px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
