export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg">
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M13 7H7v6h6V7z" />
              <path
                fillRule="evenodd"
                d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2V2a1 1 0 112 0v1h1a2 2 0 012 2v1h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v1a2 2 0 01-2 2h-1v1a1 1 0 11-2 0v-1h-2v1a1 1 0 11-2 0v-1H7a2 2 0 01-2-2v-1H4a1 1 0 110-2h1V9H4a1 1 0 010-2h1V7H4a1 1 0 010-2h1V4a2 2 0 012-2h1V2z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-primary-900">Diamond Sales AI</h1>
            <p className="text-sm text-gray-600">AI営業アシスタント</p>
          </div>
        </div>
      </div>
    </header>
  )
}
