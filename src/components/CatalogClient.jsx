"use client"

import { useEffect, useMemo, useState } from "react"
import ProductCard from "./ProductCard"
import SearchBar from "./SearchBar"
import EmptyState from "./EmptyState"
import ProductSkeleton from "./ProductSkeleton"

export default function CatalogClient({ initialProducts, nextPage }) {
  const [products, setProducts] = useState([])
  const [query, setQuery] = useState("")
  const [next, setNext] = useState(nextPage)
  const [loading, setLoading] = useState(false)
  const [initialLoading, setInitialLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setProducts(initialProducts)
      setInitialLoading(false)
    }, 700)
  }, [initialProducts])

  const filtered = useMemo(() => {
    const q = query.toLowerCase()

    return products.filter((p) =>
      p.name.toLowerCase().includes(q)
    )
  }, [products, query])

  const loadMore = async () => {
    if (!next) return

    setLoading(true)

    const res = await fetch(next, {
      headers: {
        Authorization: `Bearer TOKEN_KAMU`,
      },
    })

    const json = await res.json()

    setProducts((prev) => [...prev, ...json.data.data])
    setNext(json.data.next_page_url)

    setLoading(false)
  }

  return (
    <>
      {/* HEADER */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-blue-500">
          Catalog
        </h2>
        <span className="text-sm text-gray-500">
          {filtered.length} items
        </span>
      </div>

      {/* SEARCH */}
      <SearchBar onSearch={setQuery} />

      {/* INITIAL SKELETON */}
      {initialLoading ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <ProductSkeleton key={i} />
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <EmptyState />
      ) : (
        <>
          {/* GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
            {filtered.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>

          {/* 🔥 LOAD MORE SKELETON */}
          {loading && (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
              {Array.from({ length: 4 }).map((_, i) => (
                <ProductSkeleton key={i} />
              ))}
            </div>
          )}

          {/* LOAD MORE */}
          {next && (
            <div className="mt-8 text-center">
              <button
                onClick={loadMore}
                disabled={loading}
                className="px-6 py-2 bg-blue-600 text-white rounded-xl disabled:opacity-50"
              >
                {loading ? "Loading..." : "Load More"}
              </button>
            </div>
          )}
        </>
      )}
    </>
  )
}