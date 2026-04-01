"use client"

const REDIRECT_URL = "https://ziyadbooks.com" // ganti kalau perlu

export default function ProductCard({ product }) {
  const discount = Number(product.diskon || 0)

 const PHONE_NUMBER = "6289501877105" // ganti nomor admin

const handleClick = () => {
  const message = `Assalamualaikum, apakah produk "${product.name}" masih tersedia?`

  const encodedMessage = encodeURIComponent(message)

  const url = `https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`

  window.open(url, "_blank")
}

  return (
    <div
      onClick={handleClick}
      className="
        bg-[#0B72B5]
        rounded-2xl
        overflow-hidden
        cursor-pointer
        flex flex-col
        transition
        hover:scale-[1.02]
        hover:shadow-lg
      "
    >
      {/* IMAGE */}
      <div className="bg-white p-4 relative">
        {discount > 0 && (
          <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-md z-10">
            -{discount}%
          </span>
        )}

        <div className="aspect-square bg-gray-100 rounded-md overflow-hidden">
          <img
            src={product.image_url}
            alt={product.name}
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* CONTENT */}
      <div className="text-white p-4 flex flex-col flex-1">
        
        {/* TITLE + STOCK */}
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-sm leading-tight line-clamp-2">
            {product.name}
          </h3>

          <span className="text-xs text-right min-w-[60px]">
            Stock: {product.sisastok}
          </span>
        </div>

        {/* PREORDER */}
        {product.preorder && (
          <p className="text-xs text-yellow-300 mb-2">
            Preorder
          </p>
        )}

        {/* FOOTER */}
        <div className="mt-auto flex justify-between items-center pt-4">
          <span className="bg-white text-black text-xs px-3 py-1 rounded-full">
            Produk Buku
          </span>

          <div className="text-right">
            <span className="text-sm font-semibold block">
              {product.final_price_formatted}
            </span>

            {discount > 0 && (
              <span className="text-xs line-through opacity-70">
                {product.price_formatted}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}