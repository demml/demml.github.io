<script lang="ts">
  import "../app.css";
  import Navbar from "$lib/components/nav/Navbar.svelte";
  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" type="image/x-icon"/>
</svelte:head>

<div class="layout h-screen font-sans overflow-hidden">
  <Navbar/>
  <div class="flex-1 overflow-auto pt-[75px]">
    {@render children()}
  </div>
</div>