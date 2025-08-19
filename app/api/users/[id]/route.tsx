import { NextRequest, NextResponse } from "next/server"
import schema from "../schema"
import { prisma } from "@/prisma/client"

// Remove the unused import
// import { use } from "react"

// Remove the unused Props interface
// interface Props {
//     params: { id: number }
// }

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    // Await the params since they're now a Promise
    const { id } = await params

    const user = await prisma.user.findUnique({
        where: { id: id }
    })

    if (!user) {
        return NextResponse.json({ error: 'User not found'}, { status: 404})
    }
    return NextResponse.json(user)
}

export async function PUT(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    // Await the params
    const { id } = await params

    // Validate the request body
    const body = await request.json()
    const validation = schema.safeParse(body)
    if (!validation.success) {
        return NextResponse.json(validation.error.issues, { status: 400})
    }

    // Fetch the user with the given id
    const user = await prisma.user.findUnique({
        where: { id: id }
    })

    if (!user) {
        return NextResponse.json({ error: 'User not found' }, { status: 404})
    }

    // Update the user
    const updatedUser = await prisma.user.update({
        where: { id: user.id },
        data: {
            name: body.name,
            email: body.email
        }
    })
    return NextResponse.json(updatedUser)
}

export async function DELETE(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    // Await the params
    const { id } = await params

    // Fetch user from db
    const user = await prisma.user.findUnique({
        where: { id: id }
    })

    if (!user) {
        return NextResponse.json(
            { error: "User not found" },
            { status: 404 }
        )
    }

    // Delete the user
    await prisma.user.delete({
        where: { id: user.id }
    })
    return NextResponse.json({})
}