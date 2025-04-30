<script lang="ts">
    import { onMount } from 'svelte';
    import opsml_logo from "$lib/components/images/opsml.png";
    import scouter_logo from "$lib/components/images/scouter.png";
    
    let mounted = $state(false);
    
    onMount(() => {
        mounted = true;
    });
</script>

<div class="grid-background min-h-screen flex flex-col">
  <!-- Overview Section -->
  <div class="flex flex-col items-center justify-center p-10 max-w-4xl mx-auto">
    <div class="flex flex-col p-10 text-center items-center justify-center" id="overview">
      <h1 class="text-4xl font-bold mb-4 text-primary-800">Quality Control For Machine Learning</h1>
      <p class="text-lg text-black">Our mission is to standardize and unify machine learning workflow management through high-performance developer tools</p>
    </div>
  </div>

  <!-- Projects Section -->
  <div class="flex flex-col justify-center items-center">
    <div class="flex flex-col max-w-3xl items-start">
      <h1 class="text-4xl font-bold mb-4 text-primary-800 w-full text-left">Projects</h1>
    </div>
    <div class="flex flex-row flex-wrap gap-4 justify-center">
      <a class="text-black rounded-base shadow border-2 border-black bg-primary-500 w-[400px] h-[90px] overflow-hidden hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none p-2" href="https://docs.demml.io/opsml">
        <div class="h-12 flex justify-center items-center">
          <img 
            src={opsml_logo} 
            class="h-12 object-contain"
            alt="Opsml Logo"
          />
        </div>
        <span class="text-sm text-black text-center block pt-1">
          High performance artifact management for Python
        </span>
      </a>
      <a class="text-black rounded-base shadow border-2 border-black bg-error-500 w-[400px] h-[90px] overflow-hidden hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none p-2" href="https://docs.demml.io/scouter">
        <div class="h-12 flex justify-center items-center">
          <img 
            src={scouter_logo} 
            class="h-12 object-contain"
            alt="Scouter Logo"
          />
        </div>
        <span class="text-sm text-black text-center block pt-1">
          High performance model monitoring for Python
        </span>
      </a>
    </div>
  </div>
</div>

<style>
  .grid-background {
    background-color: #E3DFF2; /* Light background color */
    background-image: 
      linear-gradient(to right, #CECBDB 1px, transparent 1px),
      linear-gradient(to bottom, #CECBDB 1px, transparent 1px);
    background-size: 60px 60px; /* Adjust the grid size */
  }
</style>