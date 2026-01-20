import React from "react";
import Slider from "../../Components/Slider/Slider";
import LatestBooks from "../../Components/LatestBooks";
import AboutSection from "../../Components/AboutSection.jsx";
import Users_review from "../../Components/Users_review/Users_review.jsx";
import Cover from "../../Components/Cover/Cover.jsx";
import UsersReviewForm from "../../Components/UsersReview/UsersReviewForm.jsx";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { IoLibrary, IoTrendingUp, IoStar, IoPeople, IoAdd, IoHeart } from "react-icons/io5";
import { Button, Card } from "../../components/ui";
import { Link } from "react-router-dom";

const Home = () => {
  const stats = [
    { icon: IoLibrary, label: "Total Books", value: "1,000+", color: "text-primary-500" },
    { icon: IoPeople, label: "Active Readers", value: "500+", color: "text-secondary-500" },
    { icon: IoStar, label: "Reviews", value: "2,500+", color: "text-yellow-500" },
    { icon: IoHeart, label: "Favorites", value: "10,000+", color: "text-red-500" },
  ];

  const features = [
    {
      icon: IoAdd,
      title: "Add Your Books",
      description: "Share your favorite books with the community and help others discover great reads.",
      link: "/AddBooks",
      color: "bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400"
    },
    {
      icon: IoLibrary,
      title: "Browse Collection",
      description: "Explore thousands of books across different genres and find your next favorite.",
      link: "/AllBooks",
      color: "bg-secondary-50 dark:bg-secondary-900/20 text-secondary-600 dark:text-secondary-400"
    },
    {
      icon: IoStar,
      title: "Rate & Review",
      description: "Share your thoughts and help fellow readers make informed choices.",
      link: "/AllBooks",
      color: "bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400"
    },
    {
      icon: IoPeople,
      title: "Join Community",
      description: "Connect with passionate readers and discover books through recommendations.",
      link: "/SignUp",
      color: "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400"
    }
  ];

  const genres = [
    { name: "Fiction", count: "250+", image: "/api/placeholder/300/200" },
    { name: "Non-Fiction", count: "180+", image: "/api/placeholder/300/200" },
    { name: "Mystery", count: "120+", image: "/api/placeholder/300/200" },
    { name: "Romance", count: "200+", image: "/api/placeholder/300/200" },
    { name: "Sci-Fi", count: "90+", image: "/api/placeholder/300/200" },
    { name: "Biography", count: "75+", image: "/api/placeholder/300/200" }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>The Book Heaven | Discover Your Next Great Read</title>
        <meta name="description" content="Join our community of book lovers. Discover, share, and review books. Find your next great read at The Book Heaven." />
      </Helmet>

      {/* Hero Section */}
      <Slider />

      {/* Stats Section */}
      <section className="py-16 bg-neutral-50 dark:bg-neutral-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${stat.color} bg-opacity-10 mb-4`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-1">
                    {stat.value}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                    {stat.label}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Latest Books Section */}
      <div id="latest-books">
        <LatestBooks />
      </div>

      {/* Features Section */}
      <section className="py-16 bg-neutral-50 dark:bg-neutral-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-neutral-900 dark:text-white">
              Why Choose The Book Heaven?
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Join thousands of readers in building the ultimate book discovery platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card hover className="h-full p-6 text-center group">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${feature.color} mb-4 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <Link to={feature.link}>
                    <Button variant="outline" size="sm" className="group-hover:bg-primary-50 dark:group-hover:bg-primary-900/20">
                      Learn More
                    </Button>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Genres Section */}
      <section className="py-16 bg-white dark:bg-neutral-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-neutral-900 dark:text-white">
              Explore by Genre
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Discover books across various genres and find exactly what you're looking for
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {genres.map((genre, index) => (
              <motion.div
                key={genre.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={`/AllBooks?genre=${genre.name}`}>
                  <Card hover className="p-4 text-center group">
                    <div className="w-full h-24 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/20 dark:to-primary-800/20 rounded-lg mb-3 flex items-center justify-center group-hover:from-primary-200 group-hover:to-primary-300 dark:group-hover:from-primary-800/30 dark:group-hover:to-primary-700/30 transition-all">
                      <IoLibrary className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                    </div>
                    <h3 className="font-semibold text-neutral-900 dark:text-white mb-1">
                      {genre.name}
                    </h3>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      {genre.count} books
                    </p>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Cover Section */}
      <Cover />

      {/* Reviews Section */}
      <Users_review />

      {/* Vision & Mission + Review Form Section */}
      <section className="py-16 bg-neutral-50 dark:bg-neutral-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Vision & Mission */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8">
                <h2 className="text-3xl font-bold mb-8 text-neutral-900 dark:text-white">
                  Our Vision & Mission
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-3">
                      Our Vision
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      To create a platform that inspires and empowers readers around
                      the world, making knowledge and imagination accessible to
                      everyone.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-3">
                      Our Mission
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      To deliver high-quality content, foster a community of readers
                      and learners, and continually innovate to provide an engaging
                      and memorable experience.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Review Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <UsersReviewForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-primary-600 dark:bg-primary-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated with New Books
            </h2>
            <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
              Get notified when new books are added to our collection and never miss out on great reads.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/50 focus:outline-none"
              />
              <Button variant="secondary" size="lg" className="bg-white text-primary-600 hover:bg-neutral-100">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white dark:bg-neutral-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
              Ready to Start Your Reading Journey?
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto">
              Join our community of book lovers and discover your next favorite book today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/SignUp">
                <Button variant="primary" size="lg">
                  Join Now
                </Button>
              </Link>
              <Link to="/AllBooks">
                <Button variant="outline" size="lg">
                  Browse Books
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
