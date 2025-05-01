<script lang="ts">
    import { onMount } from 'svelte';
    import opsml_logo from "$lib/components/images/opsml.png";
    import scouter_logo from "$lib/components/images/scouter.png";
    
    let mounted = $state(false);
    
    onMount(() => {
        mounted = true;
    });
</script>

<div class="flex flex-col overflow-auto pb-4 gap-4">
  <!-- Overview Section -->
  <div class="rounded-base border-2 bg-surface-50  border-black flex flex-col items-center justify-center p-4 max-w-[300px] md:max-w-xl mx-auto">
    <div class="flex flex-col text-center items-center justify-center" id="overview">
      <h1 class="text-sm md:text-lg font-bold text-primary-800">Quality Control For Machine Learning</h1>
      <p class="text-xs md:text-base text-black">Our mission is to standardize and unify machine learning workflow management through high-performance developer tools</p>
    </div>
  </div>

  <!-- Projects Section -->
  <div class="flex flex-col justify-center items-center">

    <div class="flex flex-col max-w-xl items-start">
      <h1 class="text-2xl font-bold mb-4 text-primary-800 w-full text-left">Projects</h1>
    </div>

    <div class="flex flex-row flex-wrap gap-4 justify-center w-full px-4">
      <a class="text-black rounded-base shadow border-2 border-black bg-primary-500 w-[200px] md:w-[300px] min-h-[90px] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none p-2" href="https://docs.demml.io/opsml">
        <div class="h-8 md:h-12 flex justify-center items-center">
          <img 
            src={opsml_logo} 
            class="h-8 md:h-12 object-contain"
            alt="Opsml Logo"
          />
        </div>
        <span class="text-xs sm:text-sm text-black text-center block pt-1">
          High performance artifact management for Python
        </span>
      </a>
      <a class="text-black rounded-base shadow border-2 border-black bg-error-500 w-[200px] md:w-[300px] min-h-[90px] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none p-2" href="https://docs.demml.io/scouter">
        <div class="h-8 md:h-12 flex justify-center items-center">
          <img 
            src={scouter_logo} 
            class="h-8 md:h-12 object-contain"
            alt="Scouter Logo"
          />
        </div>
        <span class="text-xs sm:text-sm text-black text-center block pt-1">
          High performance model monitoring for Python
        </span>
      </a>
    </div>
  </div>
</div>
