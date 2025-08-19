interface Feature {
  title: string
  description: string
}

const features: Feature[] = [
  {
    title: 'Smart Home Integration',
    description: 'Experience seamless connectivity with our cutting-edge smart home solutions, ensuring maximum comfort and automation at your fingertips.',
  },
  {
    title: 'High-Speed Connectivity',
    description: 'Stay connected with ultra-fast Wi-Fi services and smart devices optimized for peak performance, tailored for luxury lifestyles.',
  },
  {
    title: 'Sustainable Technology',
    description: 'Our properties incorporate eco-friendly technologies, reducing energy consumption while providing a lavish living experience.',
  },
]
const Page: React.FC = () => {
  return (<>
<div className="bg-black text-white min-h-screen flex flex-col">
      <header className="py-12 px-6 text-center">
        <h1 className="text-5xl font-bold text-pink-500">Welcome to HouseIL</h1>
        <p className="mt-4 text-lg">
          Where luxury meets technology for an unparalleled living experience.
        </p>
      </header>
      <main className="flex-grow">
        <section className="py-20 bg-black">
          <div className="container mx-auto">
            <div
             }
             }
             }
              className="text-center"

              <h2 className="text-4xl font-semibold text-pink-500 mb-6">Our Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                   }
                   }

                    <h3 className="text-xl font-bold text-pink-500">{feature.title}</h3>
                    <p className="mt-2">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 py-4 text-center">
        <p className="text-sm">&copy; 2023 HouseIL. All rights reserved.</p>
      </footer>
    </div>
</>)
}
export default Page
)
