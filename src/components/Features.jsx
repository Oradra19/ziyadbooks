"use client"

import { Truck, Tag, ShieldCheck } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: <Truck className="w-8 h-8 text-blue-600" />,
      title: "Fast Shipping",
      description: "Pesananmu dikirim cepat sampai tujuan.",
    },
    {
      icon: <Tag className="w-8 h-8 text-green-600" />,
      title: "Guaranteed Cheapest",
      description: "Harga terbaik dijamin tanpa kompromi.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-red-600" />,
      title: "100% Original",
      description: "Produk asli dan berkualitas terjamin.",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-blue-500">{feature.title}</h3>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}