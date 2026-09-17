function Subscribe() {
  const handleSubmit = async (event) => {
    event.preventDefault()

    const email = event.target.email.value

    try {
      const response = await fetch("http://localhost:3000/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
      })

      const data = await response.json()

      if (response.ok) {
        document.getElementById("subscribe-message").textContent =
          "Successfully subscribed!"

        event.target.reset()
      } else {
        document.getElementById("subscribe-message").textContent =
          data.message || "Something went wrong."
      }
    } catch (error) {
      document.getElementById("subscribe-message").textContent =
        "Unable to connect to the server."
    }
  }

  return (
    <section
      id="subscribe"
      className="py-12 px-6 bg-gray-900 text-white"
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          Subscribe
        </h2>

        <p className="text-lg mb-6">
          Sign up for my daily insider.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="px-4 py-3 rounded-lg text-black w-full sm:w-80"
          />

          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Subscribe
          </button>
        </form>

        <p id="subscribe-message" className="mt-4"></p>
      </div>
    </section>
  )
}

export default Subscribe