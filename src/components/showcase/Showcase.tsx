import { ShowcaseGallery } from './ShowcaseGallery';
import { ShowcaseControls } from './ShowcaseControls';

export function Showcase() {
  return (
    <div className="showcase">
      <ShowcaseGallery />
      <ShowcaseControls />
    </div>
  );
}
