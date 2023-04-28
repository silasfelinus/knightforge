<template>
  <q-page padding>
    <q-card>
      <q-card-section>
        <div class="text-h6">User Store Test</div>
      </q-card-section>

      <q-card-section>
        <div class="text-subtitle2">Step 1: Fetch User Data</div>
        <q-chip :color="step1Status.color" text-color="white">
          {{ step1Status.message }}
        </q-chip>
      </q-card-section>

      <q-card-section>
        <div class="text-subtitle2">Step 2: Set Name</div>
        <q-chip :color="step2Status.color" text-color="white">
          {{ step2Status.message }}
        </q-chip>
      </q-card-section>

      <q-card-section>
        <div class="text-subtitle2">Step 3: Set Start Page</div>
        <q-chip :color="step3Status.color" text-color="white">
          {{ step3Status.message }}
        </q-chip>
      </q-card-section>

      <q-card-section>
        <div>User Name: {{ userName }}</div>
        <div>User Start Page: {{ userStartPage }}</div>
      </q-card-section>
    </q-card>
  </q-page>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue';

const userStore = useUserStore();

const userName = ref('');
const userStartPage = ref('');
const step1Status = ref({ message: 'Waiting', color: 'grey' });
const step2Status = ref({ message: 'Waiting', color: 'grey' });
const step3Status = ref({ message: 'Waiting', color: 'grey' });

async function fetchUserData() {
  try {
    step1Status.value = { message: 'Fetching...', color: 'orange' };
    await userStore.fetchUserData();
    step1Status.value = { message: 'Success', color: 'green' };

    step2Status.value = { message: 'Setting...', color: 'orange' };
    userName.value = userStore.getName;
    step2Status.value = { message: 'Success', color: 'green' };

    step3Status.value = { message: 'Setting...', color: 'orange' };
    userStartPage.value = userStore.getStartPage;
    step3Status.value = { message: 'Success', color: 'green' };
  } catch (error) {
    console.error('Error fetching user data:', error);
    step1Status.value = { message: 'Failed', color: 'red' };
  }
}

onMounted(async () => {
  await fetchUserData();
});

defineExpose({
  userName,
  userStartPage,
  step1Status,
  step2Status,
  step3Status,
});
</script>
