import { cn } from "@/lib/utils";
import { useRef } from "react";
import {TimelineAnimation } from "../../../components/uilayouts/timeline-animation"
import { useState } from "react";
import '../../pages/homePage/blog.css';
export const travelBlogs = [
  // OOTY
  {
    id: "ooty-guide-1",
    name: "Ooty Travel Guide: How to Reach & Tips",
    url: "https://www.travelerfood.com/blog/ooty-travel-guide-how-to-reach-transportation-options-travel-tips/",
    imgSrc:
    "https://images.unsplash.com/photo-1660918738010-295b09857f93?q=80&w=702&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "ooty-guide-2",
    name: "Ooty: A Quick Travel Guide - MakeMyTrip",
    url: "https://www.makemytrip.com/tripideas/blog/ooty-quick-travel-guide",
    imgSrc:
"https://images.unsplash.com/photo-1559147861-32715680aef8?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "ooty-guide-3",
    name: "Complete Ooty Travel Guide - IndiGo",
    url: "https://www.goindigo.in/get-inspired/ooty-travel-guide.html",
    imgSrc:
"https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/ooty-1655457424_bca80f81e8391ebdaaca.webp"
  },
  {
    id: "ooty-guide-4",
    name: "Budget Trip to Ooty - Thomas Cook",
    url: "https://www.thomascook.in/blog/india-holidays/affordable-travel-tips-and-planning-for-a-pocket-friendly-trip-to-ooty/",
    imgSrc:
"https://images.pexels.com/photos/26760886/pexels-photo-26760886.jpeg"
  },

  // MUNNAR
  {
    id: "munnar-guide-1",
    name: "3 Day Guide to Beautiful Munnar",
    url: "https://be-lavie.com/3-day-guide-to-beautiful-things-to-do-in-munnar/",
    imgSrc:
"https://i.pinimg.com/1200x/44/77/2c/44772ce987b4741158b032d70cdff89b.jpg"
  },
  {
    id: "munnar-guide-2",
    name: "7 Things to Do in Munnar - Along Dusty Roads",
    url: "https://www.alongdustyroads.com/posts/things-to-do-in-munnar",
    imgSrc:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80",
  },
  {
    id: "munnar-guide-3",
    name: "20+ Things To Do In Munnar (Ultimate Guide)",
    url: "https://thirdeyetraveller.com/things-to-do-in-munnar-tourist-places-guide/",
    imgSrc:
"https://i.pinimg.com/736x/19/b3/84/19b38461f46e5424d0df244262cfdd79.jpg"
  },
  {
    id: "munnar-guide-4",
    name: "Munnar Travel Guide - WanderOn",
    url: "https://wanderon.in/blogs/munnar-travel-guide",
    imgSrc:
"https://i.pinimg.com/736x/7b/00/69/7b00697fbd1fc9eeb1299ab645f55ca3.jpg"
  },

  // KODAIKANAL
  {
    id: "kodaikanal-guide-1",
    name: "8 Kodaikanal Travel Tips - TravelTriangle",
    url: "https://traveltriangle.com/blog/kodaikanal-travel-tips/",
    imgSrc:
"https://i.pinimg.com/736x/59/e7/a0/59e7a0c9f6c3c2ae8a8993d164672f3e.jpg"
  },
  {
    id: "kodaikanal-guide-2",
    name: "Kodaikanal Complete Travel Guide",
    url: "https://www.fairytalestudios.in/post/kodaikanal",
    imgSrc:
"https://i.pinimg.com/736x/10/62/9c/10629c772d1048341edce587d83d87f1.jpg"
  },
  {
    id: "kodaikanal-guide-3",
    name: "Visiting Kodaikanal: A Guide (Medium)",
    url: "https://snehachristall.medium.com/visiting-kodaikanal-a-2021-travel-guide-df1fb895cfb4",
    imgSrc:
"https://images.pexels.com/photos/12791178/pexels-photo-12791178.jpeg"
  },
  {
    id: "kodaikanal-guide-4",
    name: "Kodaikanal Guide - Melange of Tales",
    url: "https://melangeoftales.com/kodaikanal/",
    imgSrc:
"https://i.pinimg.com/1200x/7f/35/e3/7f35e3712516ae326e4db0dcd2121dae.jpg"
  },

  // COORG
  {
    id: "coorg-guide-1",
    name: "Coorg Travel Guide - Things to Do & Tips",
    url: "https://traveltriangle.com/blog/coorg-travel-guide/",
    imgSrc:
"https://i.pinimg.com/1200x/2b/d5/e7/2bd5e7771c473a7e12cf32dccd8bc4be.jpg"
  },
  {
    id: "coorg-guide-2",
    name: "Complete Coorg Guide - MakeMyTrip",
    url: "https://www.makemytrip.com/tripideas/blog/coorg-travel-guide",
    imgSrc:
"https://i.pinimg.com/1200x/73/a2/c9/73a2c90a95feb169d66cd86c97596901.jpg"
  },
  {
    id: "coorg-guide-3",
    name: "7 Days in Coorg - The Coffee Destination",
    url: "https://www.thrillophilia.com/coorg-travel-guide",
    imgSrc:
"https://i.pinimg.com/736x/14/be/4b/14be4b96b11a65ee9726d841dc35d53f.jpg"
  },
  {
    id: "coorg-guide-4",
    name: "Budget Guide to Coorg - WanderOn",
    url: "https://wanderon.in/blogs/coorg-travel-guide",
    imgSrc:
"https://i.pinimg.com/736x/bb/7e/41/bb7e41d5695b6d49c3cfd4993198f8c3.jpg"
  },

  // WAYANAD
  {
    id: "wayanad-guide-1",
    name: "Wayanad Travel Guide - Complete Guide",
    url: "https://traveltriangle.com/blog/wayanad-travel-guide/",
    imgSrc:
"https://i.pinimg.com/736x/58/2b/0e/582b0e9dd433a1ba61419aafde7a45f7.jpg"
  },
  {
    id: "wayanad-guide-2",
    name: "Things to Do in Wayanad - MakeMyTrip",
    url: "https://www.makemytrip.com/tripideas/blog/wayanad-travel-guide",
    imgSrc:
"https://i.pinimg.com/1200x/59/3b/db/593bdb720f9d04ac08944c4f24a9c11a.jpg"
  },
  {
    id: "wayanad-guide-3",
    name: "Wayanad: Kerala's Hidden Gem - Thrillophilia",
    url: "https://www.thrillophilia.com/wayanad-travel-guide",
    imgSrc:
"https://i.pinimg.com/736x/c7/3a/9b/c73a9bd2518839290ba86dbee2a3da82.jpg"
  },
  {
    id: "wayanad-guide-4",
    name: "Wayanad Weekend Guide - TravelTriangle",
    url: "https://traveltriangle.com/blog/wayanad-weekend-getaway/",
    imgSrc:
"https://i.pinimg.com/1200x/9b/ed/64/9bed649601b45721546382eece15d767.jpg"
  },

  // DARJEELING
  {
    id: "darjeeling-guide-1",
    name: "Darjeeling Travel Guide - Complete Information",
    url: "https://traveltriangle.com/blog/darjeeling-travel-guide/",
    imgSrc:
"https://i.pinimg.com/736x/6e/54/53/6e545399f88badacbc0186d57be68737.jpg"
  },
  {
    id: "darjeeling-guide-2",
    name: "Things to Do in Darjeeling - MakeMyTrip",
    url: "https://www.makemytrip.com/tripideas/blog/darjeeling-travel-guide",
    imgSrc:
"https://i.pinimg.com/736x/dd/71/2f/dd712ff2b426a04a71135b2ffe762817.jpg"
  },
  {
    id: "darjeeling-guide-3",
    name: "Darjeeling: The Queen of Hills - Thrillophilia",
    url: "https://www.thrillophilia.com/darjeeling-travel-guide",
    imgSrc: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0"
  },
  {
    id: "darjeeling-guide-4",
    name: "Budget Trip to Darjeeling - Thomas Cook",
    url: "https://www.thomascook.in/blog/india-holidays/darjeeling-travel-guide",
    imgSrc:
"https://i.pinimg.com/1200x/c0/66/61/c06661da7940d27a2371b7c9f4fef48b.jpg"
  },

  // MANALI
  {
    id: "manali-guide-1",
    name: "Manali Travel Guide - Complete Information",
    url: "https://traveltriangle.com/blog/manali-travel-guide/",
    imgSrc:
"https://i.pinimg.com/1200x/e8/77/db/e877db0ff76c1c66f9f0f7c18004a8a5.jpg"
  },
  {
    id: "manali-guide-2",
    name: "Things to Do in Manali - MakeMyTrip",
    url: "https://www.makemytrip.com/tripideas/blog/manali-travel-guide",
    imgSrc:
"https://i.pinimg.com/736x/57/5b/29/575b29cd1378bd6889caf30db6b6a502.jpg"
  },
  {
    id: "manali-guide-3",
    name: "Manali Adventure Guide - Thrillophilia",
    url: "https://www.thrillophilia.com/manali-travel-guide",
    imgSrc: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0"
  },
  {
    id: "manali-guide-4",
    name: "Budget Manali Trip - WanderOn",
    url: "https://wanderon.in/blogs/manali-travel-guide",
    imgSrc:
"https://i.pinimg.com/736x/6b/e7/10/6be710a7eeed76f831f16ee34d79d140.jpg"
  },

  // SHIMLA
  {
    id: "shimla-guide-1",
    name: "Shimla Travel Guide - Complete Information",
    url: "https://traveltriangle.com/blog/shimla-travel-guide/",
    imgSrc:
"https://i.pinimg.com/1200x/de/da/36/deda361c683e038ca00e92bf12002b4e.jpg"
  },
  {
    id: "shimla-guide-2",
    name: "Things to Do in Shimla - MakeMyTrip",
    url: "https://www.makemytrip.com/tripideas/blog/shimla-travel-guide",
    imgSrc:
"https://i.pinimg.com/736x/f7/3c/b9/f73cb99e31124527bf912cfa28e0aea6.jpg"
  },
  {
    id: "shimla-guide-3",
    name: "Shimla: The Queen of Hills - Thrillophilia",
    url: "https://www.thrillophilia.com/shimla-travel-guide",
    imgSrc: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0"
  },
  {
    id: "shimla-guide-4",
    name: "Budget Shimla Trip - Thomas Cook",
    url: "https://www.thomascook.in/blog/india-holidays/shimla-travel-guide",
    imgSrc:
"https://i.pinimg.com/1200x/61/ea/5e/61ea5ee98b47953cb6997c640f77e0f0.jpg"
  }

];
function BlogDetails() {
    const timelineRef = useRef(null);


    const [visibleCount, setVisibleCount] = useState(6);

    const revealVariants = {
      visible: (i) => ({
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        transition: { delay: i * 0.4, duration: 0.5 },
      }),
      hidden: { filter: "blur(10px)", y: -20, opacity: 0 },
    };


    const visibleBlogs = travelBlogs.slice(0, visibleCount);

    return (
      <main ref={timelineRef}>
        <TimelineAnimation
          as="header"
          animationNum={1}
          timelineRef={timelineRef}
          className={cn(
            "w-full top-1.5 left-0 z-50 transition-all duration-300 relative md:px-0 px-2"
          )}
        />

        <div className="lg:container lg:px-0 px-3 mx-auto">
          <section className="mt-16 w-full">
            <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 gap-6 py-16">
              {visibleBlogs.map((block, index) => (
                <TimelineAnimation
                  key={block.id}
                  animationNum={2 + index}
                  timelineRef={timelineRef}
                  customVariants={revealVariants}
                  className="relative group dark:bg-neutral-900 bg-neutral-200 sm:p-4 p-2 rounded-lg border dark:border-neutral-800 border-neutral-300"
                >
                  <a
                    href={block.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <img
                      src={block.imgSrc}
                      alt={block.name}
                      className="rounded-lg w-full object-cover aspect-video"
                    />
                    <h3 className="mt-2 md:text-lg text-xs font-medium">
                      {block.name}
                    </h3>
                  </a>
                </TimelineAnimation>
              ))}
            </div>

            {visibleCount < travelBlogs.length && (
              <div className="flex justify-end mt-1.5">
                <button
                  onClick={() => setVisibleCount((prev) => prev + 6)}
                  className=" viewmore border-2 border-green-600/30 p-10 text-white rounded-lg shadow-md hover:bg-green-700 transition"
                >
                  View More Blogs
                </button>
              </div>
            )}
          </section>
        </div>
      </main>
    );
  }

  export default BlogDetails;
