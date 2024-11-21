import { Button } from "@/components/ui/button";

export const AboutPage = () => {
  return (
    <section className="w-3/5 m-auto">
      <div className="title flex flex-col text-center p-5 gap-4">
        <h2 className="text-4xl font-bold">About Blog</h2>
        <p className="text-xl ">
          Empowering tech enthusiasts to share knowledge and inspire innovation.
        </p>
      </div>
      <div className="mission flex p-5 w-full items-center">
        <div>
          <h4 className="text-3xl w-full font-bold">Our Mission</h4>
          <p className="w-3/4">
            At Blog, we believe in the power of shared knowledge. Our mission is
            to create a platform where tech enthusiasts, developers, and
            innovators can come together to share ideas, learn from each other,
            and push the boundaries of what's possible in the world of
            technology.
          </p>
        </div>
        <img
          className="w-2/4 rounded-lg"
          src="https://g-zwkebgiacpe.vusercontent.net/placeholder.svg?height=400&width=400"
          alt=""
        />
      </div>
      <div className="offer flex flex-col items-center p-5">
        <h4 className="text-3xl font-bold">What We Offer</h4>
        <div className="flex justify-evenly mt-10 gap-4">
          <div className="border-2 rounded-md p-4 w-2/6 ">
            <div className="w-full">
              <img src="" alt="" />
              <span className="text-xl font-bold">Rich Content</span>
              <p className="">
                Access a wide range of articles, tutorials, and insights on the
                latest tech trends and best practices.
              </p>
            </div>
          </div>
          <div className="border-2 rounded-md p-4 w-2/6 ">
            <div className="w-full">
              <img src="" alt="" />
              <span className="text-xl font-bold">Rich Content</span>
              <p className="">
                Access a wide range of articles, tutorials, and insights on the
                latest tech trends and best practices.
              </p>
            </div>
          </div>
          <div className="border-2 rounded-md p-4 w-2/6 ">
            <div className="w-full">
              <img src="" alt="" />
              <span className="text-xl font-bold">Rich Content</span>
              <p className="">
                Access a wide range of articles, tutorials, and insights on the
                latest tech trends and best practices.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="story rounded-lg bg-muted p-5 mt-5">
        <h4 className="text-3xl font-bold mb-5">Our Story</h4>
        <p>
          Founded in 2023, bitBlogs started as a small project by a group of
          passionate developers who wanted to create a space for sharing their
          experiences and learning from others. What began as a simple blog
          quickly grew into a thriving community of tech enthusiasts from all
          around the world. <br /> Today, bitBlogs is proud to be a leading
          platform for technology-focused content, fostering innovation and
          collaboration in the ever-evolving world of tech.
        </p>
      </div>
      <div className="flex justify-center items-center text-center p-10 flex-col">
        <h3 className="text-3xl font-bold mb-5">Join Us on Journey</h3>
        <p className="mb-5">
          Whether you're a seasoned developer, a curious beginner, or somewhere
          in between, there's a place for you at bitBlogs. Let's shape the
          future of technology together.
        </p>
        <Button className="bg-blue-600 text-white">Get Started Today</Button>
      </div>
    </section>
  );
};
