import { GetStaticPaths, GetStaticProps } from 'next'
import { getCollectionByHandle } from '../lib/data/collections'
import React from 'react'

interface CollectionPageProps {
  collection: any // Replace with your specific collection type
  countryCode: string
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [], // You can pre-render specific paths if needed
    fallback: 'blocking' // Allows dynamic generation of pages
  }
}

export const getStaticProps: GetStaticProps<CollectionPageProps> = async ({ 
  params 
}) => {
  try {
    const countryCode = params?.countryCode as string
    const handle = params?.handle as string

    // Fetch collection data using the new method
    const collection = await getCollectionByHandle(handle)

    return {
      props: {
        collection,
        countryCode
      },
      revalidate: 60 // Regenerate page every 60 seconds
    }
  } catch (error) {
    console.error('Failed to fetch collection:', error)
    return {
      notFound: true // This will show a 404 page
    }
  }
}