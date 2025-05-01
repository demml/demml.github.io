<script lang="ts">
    import { onMount } from "svelte";
    import logo from "$lib/components/images/demml.png";
    import { Github } from 'lucide-svelte';
  
  
  
    let imageLoaded = $state(false);
    
    onMount(() => {
      const img = new Image();
      img.src = logo;
      img.onload = () => {
        imageLoaded = true;
      };
    });
  
  </script>
  
  <nav class="fixed left-0 top-0 z-20 mx-auto flex h-[75px] w-full items-center border-b-4 border-border bg-primary-700 border-b-2 border-black px-2 m500:h-16">
    <div class="mx-auto flex w-full items-center justify-between px-4 md:px-20">
      
 
      <div class="flex items-center justify-start gap-10">
        <a href="/" class="items-center">
          <div class="h-8 sm:h-12">
            <img 
              src={logo} 
              class="h-8 sm:h-12 object-contain"
              alt="Opsml Logo"
            />
          </div>
        </a>
      </div>

      
      <div class="flex items-center gap-5 m1000:gap-5">
        <div class="flex items-center justify-end gap-5 m800:w-[unset] m400:gap-3">
          <a aria-label="Close" href="https://github.com/demml" class="m800:hidden flex gap-2 items-center justify-center rounded-base border-2 border-black shadow p-2 shadow-hover bg-surface-50">
            <Github color="#5948a3"/>
          </a>
        </div>
      </div>
  
    </div>  
  </nav>
  
  
  