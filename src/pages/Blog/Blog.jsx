import React from 'react'
import blogImg from "../../assets/blog-images/blogImg1.jpg"
import BlogCard from '../../components/BlogCard/BlogCard'

const blogPosts = [
  {
    title: "Apple Intelligence arrives in Ireland: here’s your list of compatible Apple devices",
    summary: `The wait is over: with the release of iOS 18.4, iPadOS 18.4 and macOS Sequoia 15.4, Apple Intelligence is finally available to Irish customers on iPhone, iPad and Mac. Here are the Apple products that support it.`,
    image: blogImg,
  },
  {
    title: "Refurbished Tech vs New: Which One Is Right For You?",
    summary: `Buying refurbished isn't just good for your wallet — it's great for the planet too. Here's a detailed comparison between refurbished and new tech to help you decide.`,
    image: blogImg,
  },
  {
    title: "5 Things to Check Before Buying a Refurbished Device",
    summary: `Not all refurbished devices are the same. Here's a checklist of what to look for before hitting the purchase button.`,
    image: blogImg,
  },
  {
    title: "Why You Should Consider Refurbished Devices for Your Business",
    summary: "From cost savings to environmental impact, refurbished tech is becoming a smart choice for startups and enterprises alike.",
    image: blogImg,
  },
  {
    title: "How We Ensure Quality in Every Refurbished Product",
    summary: "Learn about our rigorous 40-step testing process and how it guarantees performance and reliability for every device.",
    image: blogImg,
  },
  {
    title: "The Environmental Benefits of Buying Refurbished",
    summary: "Refurbished electronics significantly reduce e-waste and carbon footprint. Here’s how your next device can help the planet.",
    image: blogImg,
  }
]

const Blog = () => {
  return (
    <section className="container py-12">
      <h2 className="text-2xl md:text-3xl text-center mb-4">
        The refurbed Blog
      </h2>
      <p className="text-center text-gray-600 text-lg md:text-xl sm:max-w-[80%] lg:max-w-[70%] mx-auto mb-12">
        Explore stories, background information and expert opinions on refurbed and sustainable shopping.
      </p>

      <div className="grid gap-10 md:max-w-[85%] mx-auto">
        {blogPosts.map((post, index) => (
          <BlogCard key={index} {...post} />
        ))}
      </div>
    </section>
  )
}

export default Blog
