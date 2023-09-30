import VideoThumb1 from '@/public/images/talk-1.jpg';
import VideoThumb2 from '@/public/images/talk-2.jpg';
import VideoThumb3 from '@/public/images/talk-3.jpg';
import VideoThumb4 from '@/public/images/talk-4.jpg';
import VideoThumb5 from '@/public/images/talk-5.jpg';
import VideoThumb6 from '@/public/images/talk-6.jpg';
import VideoThumb7 from '@/public/images/talk-7.jpg';
import ModalVideo from '@/components/modal-video';

export default function Talks() {
  return (
    <section className="relative sm:mt-0 ">
      <div className="max-w-6xl mx-auto px-8 sm:px-12  ">
        {/*  Section title */}
        <div
          className=" py-12  sm:pt-12 pt-40 sm:border-t border-gray-400 font-normal text-3xl lg:text-3xl text-center md:text-left text-slate-400"
          data-aos="fade-up"
        >
          latest talks from love ayurveda tv
        </div>

        <div className="grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start py-4">
          <div className="relative  pb-9/16 md:pb-3/4 lg:pb-9/16 overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
            <div className="w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out">
              <ModalVideo
                thumb={VideoThumb2}
                thumbWidth={540}
                thumbHeight={303}
                thumbAlt="Modal video thumbnail"
                videoUrl="https://www.youtube.com/embed/np8JsawzGGI?si=HqC3p0a4Ufjyb5LN"
                videoWidth={1920}
                videoHeight={1080}
              />
            </div>

            <div className="mt-4">
              <h3 className="text-xl text-slate-400">Talk Title</h3>
              <p className="text-gray-500 mt-2">
                Description or any other information about the talk goes here.
              </p>
            </div>
          </div>

          <div className="relative md:mt-0 -mt-40 pb-9/16 md:pb-3/4 lg:pb-9/16 overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
            <div className="w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out">
              <ModalVideo
                thumb={VideoThumb5}
                thumbWidth={540}
                thumbHeight={303}
                thumbAlt="Modal video thumbnail"
                videoUrl="https://www.youtube.com/embed/np8JsawzGGI?si=HqC3p0a4Ufjyb5LN"
                videoWidth={1920}
                videoHeight={1080}
              />
            </div>

            <div className="mt-4">
              <h3 className="text-xl text-slate-400">Talk Title</h3>
              <p className="text-gray-500 mt-2">
                Description or any other information about the talk goes here.
              </p>
            </div>
          </div>

          <div className="relative md:mt-0 -mt-40 pb-9/16 md:pb-3/4 lg:pb-9/16 overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
            <div className="w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out">
              <ModalVideo
                thumb={VideoThumb6}
                thumbWidth={540}
                thumbHeight={303}
                thumbAlt="Modal video thumbnail"
                videoUrl="https://www.youtube.com/embed/np8JsawzGGI?si=HqC3p0a4Ufjyb5LN"
                videoWidth={1920}
                videoHeight={1080}
              />
            </div>

            <div className="mt-4">
              <h3 className="text-xl text-slate-400">Talk Title</h3>
              <p className="text-gray-500 mt-2">
                Description or any other information about the talk goes here.
              </p>
            </div>
          </div>
          <div className="relative -mt-40 pb-9/16 md:pb-3/4 lg:pb-9/16 overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
            <div className="w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out">
              <ModalVideo
                thumb={VideoThumb3}
                thumbWidth={540}
                thumbHeight={303}
                thumbAlt="Modal video thumbnail"
                videoUrl="https://www.youtube.com/embed/np8JsawzGGI?si=HqC3p0a4Ufjyb5LN"
                videoWidth={1920}
                videoHeight={1080}
              />
            </div>

            <div className="mt-4">
              <h3 className="text-xl text-slate-400">Talk Title</h3>
              <p className="text-gray-500 mt-2">
                Description or any other information about the talk goes here.
              </p>
            </div>
          </div>
          <div className="relative -mt-40 pb-9/16 md:pb-3/4 lg:pb-9/16 overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
            <div className="w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out">
              <ModalVideo
                thumb={VideoThumb4}
                thumbWidth={540}
                thumbHeight={303}
                thumbAlt="Modal video thumbnail"
                videoUrl="https://www.youtube.com/embed/np8JsawzGGI?si=HqC3p0a4Ufjyb5LN"
                videoWidth={1920}
                videoHeight={1080}
              />
            </div>

            <div className="mt-4">
              <h3 className="text-xl text-slate-400">Talk Title</h3>
              <p className="text-gray-500 mt-2">
                Description or any other information about the talk goes here.
              </p>
            </div>
          </div>
          <div className="relative -mt-40 pb-9/16 md:pb-3/4 lg:pb-9/16 overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
            <div className="w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out">
              <ModalVideo
                thumb={VideoThumb7}
                thumbWidth={540}
                thumbHeight={303}
                thumbAlt="Modal video thumbnail"
                videoUrl="https://www.youtube.com/embed/np8JsawzGGI?si=HqC3p0a4Ufjyb5LN"
                videoWidth={1920}
                videoHeight={1080}
              />
            </div>

            <div className="mt-4">
              <h3 className="text-xl text-slate-400">Talk Title</h3>
              <p className="text-gray-500 mt-2">
                Description or any other information about the talk goes here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
