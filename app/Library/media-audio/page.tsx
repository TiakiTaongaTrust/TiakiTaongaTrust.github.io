import CardDetail from "@/app/components/card/CardDetail";
import LibraryNavigation from "@/app/components/navigations/LibraryNavigation";

export default function MediaAudioPage() {
  return (
    <>
      <div className="mt-32">
        <div className="container">
          <LibraryNavigation title="Media (Audio)" />
          <div className="grid grid-cols-3 my-10">
            <CardDetail
              title="Sound Track - Pūtātara"
              description="The urgent, carrying sound of the pūtātara (shell trumpet) could be heard over a long distance, so it is ideal for signalling or ceremonial purposes. Pūtātara were usually made from native conch shells, but sometimes from triton shells, a non-native species that occasionally washed up on northern beaches. This 19th-century example is made from a conch shell with a carved wooden mouthpiece, and a feather and muka (flax fibre) thong. Listen to the pūtātara being played."
              buttonText="View External Resource"
              imageHide={true}
            />
          </div>
        </div>
      </div>
    </>
  );
}
