import CardDetail from "@/app/components/card/CardDetail";
import LibraryNavigation from "@/app/components/navigations/LibraryNavigation";
import { MediaAudio } from "@/constants";

export default function MediaAudioPage() {
  return (
    <>
      <LibraryNavigation title="Media (Audio)" />
      <div className="grid grid-cols-3 my-10">
        {MediaAudio.map((item, index) => (
          <CardDetail
            key={index}
            title={item.title}
            description={item.description}
            buttonText={item.buttonText}
          />
        ))}
      </div>
    </>
  );
}
