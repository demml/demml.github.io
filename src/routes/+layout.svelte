<script lang="ts">
  import "../app.css";
  import Navbar from "$lib/components/nav/Navbar.svelte";
  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" type="image/x-icon"/>
</svelte:head>

<div class="flex flex-col min-h-screen h-screen font-sans overflow-hidden grid-background">
  <Navbar/>
  <div class="flex-1 flex items-center justify-center overflow-auto pb-4 border-b-2 border-black pt-[110px] m500:pt-16">
    {@render children()}
  </div>
  <footer class="flex items-center p-4 bg-primary-700 text-white">
    <p class="text-sm text-left">© 2025 Demml.</p>
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

