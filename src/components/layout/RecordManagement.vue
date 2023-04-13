<!-- src/components/RecordManagement.vue -->

<template>
  <div>
    <h1>Record Management</h1>

    <!-- Display records in a table -->
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="record in records" :key="record.id">
          <td>{{ record.id }}</td>
          <td>{{ record.name }}</td>
          <td>{{ record.email }}</td>
          <td>
            <button @click="editRecord(record)">Edit</button>
            <button @click="deleteRecord(record.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Add a form for creating or updating records -->
    <form @submit.prevent="submitForm">
      <label>
        Name:
        <input v-model="form.name" required />
      </label>
      <label>
        Email:
        <input type="email" v-model="form.email" required />
      </label>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      records: [],
      form: {
        id: null,
        name: '',
        email: '',
      },
    };
  },
  methods: {
    async fetchRecords() {
      try {
        const response = await axios.get('/api/records');
        this.records = response.data;
      } catch (error) {
        console.error('Error fetching records:', error);
      }
    },
    editRecord(record) {
      this.form.id = record.id;
      this.form.name = record.name;
      this.form.email = record.email;
    },
    async submitForm() {
      const data = {
        name: this.form.name,
        email: this.form.email,
      };

      try {
        if (this.form.id) {
          await axios.put(`/api/records/${this.form.id}`, data);
        } else {
          await axios.post('/api/records', data);
        }
        this.resetForm();
        await this.fetchRecords();
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    },
    resetForm() {
      this.form.id = null;
      this.form.name = '';
      this.form.email = '';
    },
    async deleteRecord(id) {
      try {
        await axios.delete(`/api/records/${id}`);
        await this.fetchRecords();
      } catch (error) {
        console.error('Error deleting record:', error);
      }
    },
  },
  mounted() {
    this.fetchRecords();
  },
};
</script>
