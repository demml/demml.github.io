<script lang="ts">
  import "../app.css";
  import Navbar from "$lib/components/nav/Navbar.svelte";
  let { children } = $props();
  import gear from "$lib/components/images/demml-gear-overlay.png";
</script>

<svelte:head>
  <link rel="icon" type="image/x-icon"/>
</svelte:head>

<div class="flex flex-col min-h-screen h-screen font-sans overflow-hidden relative">
  <div class="grid-background absolute inset-0 z-0"></div>
  <img 
    src={gear} 
    alt="Gear overlay" 
    class="hidden xl:fixed xl:block top-30 right-20 xl:w-80 xl:h-80 pointer-events-none z-[1]" 
  />
  <div class="relative z-[2] flex flex-col min-h-screen">
    <Navbar/>
    <div class="flex-1 flex items-center justify-center overflow-auto pb-4 border-b-2 border-black pt-[110px] m500:pt-16">
      {@render children()}
    </div>
  </div>
  <img 
    src={gear} 
    alt="Gear overlay" 
    class="hidden xl:fixed xl:block bottom-30 left-20 xl:w-80 xl:h-80 pointer-events-none z-[1]" 
  />
  <footer class="flex items-center p-4 bg-primary-700 text-white">
    <p class="text-sm text-left">© 2025 Demml</p>
  </footer>
</div>

<style>
  .grid-background {
    background-color: #E3DFF2;
    background-image: 
      linear-gradient(to right, #CECBDB 1px, transparent 1px),
      linear-gradient(to bottom, #CECBDB 1px, transparent 1px);
    background-size: 60px 60px;
  }
</style>

