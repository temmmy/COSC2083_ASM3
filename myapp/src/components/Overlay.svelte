<script>
    import {isOverlayOpen} from "../stores/OverlayStore"
    import { fade } from "svelte/transition";
</script>

<div class="w-screen h-screen fixed top-0 left-0 flex justify-center items-center opacity-95 z-10" on:click={() => {isOverlayOpen.set(false)}} transition:fade>
    <div class="bg-selected-text  text-white rounded-3xl px-8 py-10 relative w-6/12" on:click|stopPropagation>
        <button on:click={() => {isOverlayOpen.set(false)}} class="absolute top-2 right-3 text-4xl text-gray-300 hover:-translate-y-0.5 transition-transform">&times;</button>
        <slot/> 
    </div>
</div>