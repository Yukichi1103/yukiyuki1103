'use client'

import { GeneratedContent } from '@/types'
import CopyButton from './CopyButton'

interface OutputSectionProps {
  generatedContent: GeneratedContent
  activeTab: 'email' | 'script' | 'followup'
  onTabChange: (tab: 'email' | 'script' | 'followup') => void
}

export default function OutputSection({
  generatedContent,
  activeTab,
  onTabChange,
}: OutputSectionProps) {
  const tabs = [
    { id: 'email' as const, label: '営業メール', icon: '📧' },
    { id: 'script' as const, label: '電話営業スクリプト', icon: '☎️' },
    { id: 'followup' as const, label: 'フォローメール', icon: '📨' },
  ]

  const getContent = () => {
    switch (activeTab) {
      case 'email':
        return generatedContent.email
      case 'script':
        return generatedContent.phoneScript
      case 'followup':
        return generatedContent.followUpEmail
      default:
        return ''
    }
  }

  const isEmpty = !generatedContent.email && !generatedContent.phoneScript && !generatedContent.followUpEmail

  return (
    <div className="card">
      {/* Tabs */}
      <div className="flex gap-2 mb-6 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`px-4 py-3 font-semibold text-sm transition-colors duration-200 border-b-2 ${
              activeTab === tab.id
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-gray-600 hover:text-gray-800'
            }`}
          >
            <span className="mr-2">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Area */}
      {isEmpty ? (
        <div className="flex flex-col items-center justify-center py-16 text-gray-400">
          <svg
            className="w-12 h-12 mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <p className="text-center">
            左の入力フォームで情報を入力して、<br />
            「営業文章を生成」ボタンをクリックしてください
          </p>
        </div>
      ) : (
        <>
          <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">
              💡 生成された文章はテンプレートです。実際の使用時には内容を確認・編集してください
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 mb-4 min-h-96 max-h-96 overflow-y-auto border border-gray-200">
            <p className="text-gray-800 whitespace-pre-wrap font-sans">
              {getContent()}
            </p>
          </div>
          <div className="flex gap-3">
            <CopyButton text={getContent()} />
          </div>
        </>
      )}
    </div>
  )
}
