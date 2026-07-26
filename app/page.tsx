'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import InputForm from '@/components/InputForm'
import OutputSection from '@/components/OutputSection'
import { FormData, GeneratedContent } from '@/types'

export default function Home() {
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    industry: '',
    product: '',
    targetPosition: '',
    targetPain: '',
  })

  const [generatedContent, setGeneratedContent] = useState<GeneratedContent>({
    email: '',
    phoneScript: '',
    followUpEmail: '',
  })

  const [activeTab, setActiveTab] = useState<'email' | 'script' | 'followup'>('email')

  const handleFormChange = (data: FormData) => {
    setFormData(data)
  }

  const handleGenerate = (content: GeneratedContent) => {
    setGeneratedContent(content)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Input Form Section */}
          <div className="lg:col-span-1">
            <InputForm onFormChange={handleFormChange} onGenerate={handleGenerate} />
          </div>

          {/* Output Section */}
          <div className="lg:col-span-2">
            <OutputSection
              generatedContent={generatedContent}
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />
          </div>
        </div>
      </main>
    </div>
  )
}
