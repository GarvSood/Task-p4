import TutorialCard from "./TutorialCard"

import codingWorkspace from "../assets/coding workspace.jpg"
import javaCode from "../assets/java code on laptop.jpeg"
import reactScreen from "../assets/react on screen.jpeg"

function FeaturedTutorials() {
  const tutorials = [
    {
      image: codingWorkspace,
      title: "Building Your First React Component",
      description:
        "Learn how to create reusable components and structure a React application.",
      category: "React",
      rating: 5,
      author: "Garv"
    },
    {
      image: javaCode,
      title: "Working with React Props",
      description:
        "Understand how information can be passed from parent components to child components.",
      category: "React",
      rating: 4.9,
      author: "Garv"
    },
    {
      image: reactScreen,
      title: "Creating Responsive Websites",
      description:
        "Learn how responsive layouts can make your website work across different screen sizes.",
      category: "Web Design",
      rating: 5,
      author: "Garv"
    }
  ]

  return (
    <section className="py-16 px-6 bg-white">
      <h2 className="text-4xl font-bold text-center mb-10">
        Featured Tutorials
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {tutorials.map((tutorial) => (
          <TutorialCard
            key={tutorial.title}
            image={tutorial.image}
            title={tutorial.title}
            description={tutorial.description}
            category={tutorial.category}
            rating={tutorial.rating}
            author={tutorial.author}
          />
        ))}
      </div>

      <div className="text-center mt-10">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          See all tutorials
        </button>
      </div>
    </section>
  )
}

export default FeaturedTutorials