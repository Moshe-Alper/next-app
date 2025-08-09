import { NextRequest, NextResponse } from "next/server"
import schema from "../schema"
import { prisma } from "@/prisma/client"
interface Props {
    params: { id: number }
}

export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }) {

    const user = await prisma.user.findUnique({
        where: { id: parseInt(params.id) }
    })

    if (!user) {
        return NextResponse.json({ error: 'User not found'}, { status: 404})
    }
    return NextResponse.json(user)
}

export async function PUT(
    request: NextRequest,
    { params }: { params: { id: number } }) {
    // Validate the request body
    // If invalid, return 400
    // Fetch the user with the given id
    // If doesn't exist, return 404
    // Update the user
    // Return the update user
    const body = await request.json()
    const validation = schema.safeParse(body)
    if (!validation.success) {
        return NextResponse.json(validation.error.issues, { status: 400})
    }
    if (params.id > 10) {
        return NextResponse.json({ error: 'User not found' }, { status: 404})
    }
    return NextResponse.json({ id: 1, name: body.name })
}

export function DELETE(
    request: NextRequest,
    { params }: { params: { id: number } }) { 
    // Fetch user from db
    // If not found, return 404
    // Delete the user
    // Return 200
    if (params.id > 10) {
        return NextResponse.json({ error: 'User not found' }, { status: 404})
    }
        return NextResponse.json({})
}