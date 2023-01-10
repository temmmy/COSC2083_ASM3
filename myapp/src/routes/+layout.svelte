<script>
    import "@fontsource/nunito";
    import "../app.css";
    import {isOverlayOpen, Noverlay} from "../stores/OverlayStore"
    import Overlay from "../components/Overlay.svelte"
</script>

{#if $isOverlayOpen}
  <Overlay>
    {#if Noverlay.n == 1}
      <p class="text-white font-bold text-5xl mb-10">Topic</p>
      <p class="text-white text-xl">The simulation of human intelligence processes by machines, particularly computer systems, is known as Artificial Intelligence (AI). This disruptive technology significantly shifts the economy all over the world. The combination of AI and other fields has enormous potential for developing new business models made possible by digitization. Even despite the fact that the powers of the human mind are endless, they still can be modeled and even improved upon by machines thanks to artificial intelligence. 
        That’s why more and more companies and corporations are starting to actively utilize Artificial Intelligence to reach new heights.<br><br> For instance, one of the key advantages of integrating AI into business is increased efficiency. By automating routine tasks and streamlining processes, businesses can free up time and resources that can be better spent on other tasks. AI can also help businesses to make better, more informed decisions by providing insights and analysis that would be difficult or impossible for humans to produce on their own. This can be particularly valuable for companies that rely on large amounts of data to make strategic decisions.. On the other hand, the application of AI in e-commerce can be evident in personalization as a service, product recommendations and purchase predictions, fraud detection, and prevention of online transactions. It’s also widely spread in the marketing area: for example, personalization of news feeds, ad targeting and optimization, and language recognition.<br><br> Our team decided to make a Sales Forecaster using Machine Learning  to show the power of AI in the commercial sphere in the hands of only 1st year students. Even though its impact on our lives is already invaluable and, in some cases, irreplaceable, AI as a field still has so much potential that researchers themselves are not confident about what artificial intelligence means for the future of business and how many breakthroughs and innovations it has yet to bring. </p>
    {:else if Noverlay.n == 2}
      <p class="text-white font-bold text-5xl mb-10">Motivation</p>
    {:else if Noverlay.n == 3}
      <p class="text-white font-bold text-5xl mb-10">Landscape</p>
    {:else if Noverlay.n == 4}
      <p class="text-white font-bold text-5xl mb-10">Aims</p>
    {:else if Noverlay.n == 5}
      <p class="text-white font-bold text-5xl mb-10">Plans</p>
    {:else if Noverlay.n == 6}
      <p class="text-white font-bold text-5xl mb-10">Progress</p> 
    {:else if Noverlay.n == 7}
      <p class="text-white font-bold text-5xl mb-10">Roles</p>
    {:else if Noverlay.n == 8}
      <p class="text-white font-bold text-5xl mb-10">Scope and Limits</p>
    {:else if Noverlay.n == 9}
      <p class="text-white font-bold text-5xl mb-10">Tools and Technologies</p>
    {:else if Noverlay.n == 10}
      <p class="text-white font-bold text-5xl mb-10">Testing</p>
    {:else if Noverlay.n == 11}
      <p class="text-white font-bold text-5xl mb-10">Risks</p>
    {:else if Noverlay.n == 12}
      <p class="text-white font-bold text-5xl mb-10">Communication</p> 
    {/if}
  </Overlay>
{/if}
<style>
    :global(body) {
      font-family: "Nunito", sans-serif;
    }
</style>
<slot />