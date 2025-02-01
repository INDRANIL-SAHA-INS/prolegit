import { NextResponse } from 'next/server';
import { generateUploadUrl } from '@/app/utils/s3';

export async function POST(request: Request) {
  try {
    const { filename, contentType } = await request.json();
    const key = `reports/${Date.now()}-${filename}`;
    const uploadUrl = await generateUploadUrl(key);
    
    return NextResponse.json(uploadUrl);
  } catch (error) {
    console.error('Error generating upload URL:', error);
    return NextResponse.json(
      { error: 'Error generating upload URL' },
      { status: 500 }
    );
  }
}