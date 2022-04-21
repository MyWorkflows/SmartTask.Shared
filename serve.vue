<script lang="ts">
import { defineComponent } from "vue";
import SmartTaskComponent from "@/smart-task-component.vue";

export default defineComponent({
  name: "ServeDev",
  components: {
    SmartTaskComponent,
  },
});
</script>

<template>
  <div id="app">
    <div class="container">
      <div class="row mt-5">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <h3>Your Component Preview</h3>
            </div>
            <div class="card-body">
              <smart-task-component />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
