import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const notifications = [
  {
    title: "Junior Front-End Developer",
    description: "Lorem GmbH",
  },
  {
    title: "MERN Full-Stack Developer",
    description: "Ipsum co.",
  },
  {
    title: "Junior Back-End Developer",
    description: "Kirner GmbH",
  },
]



export default function Sidebar3({ className, ...props }) {
  return (
    <Card className= {cn("w-1/2 mt-4", className)} {...props}>
      <CardHeader>
        <CardTitle>Latest Jobs </CardTitle>

      </CardHeader>
      <CardContent className="grid gap-4">
        <div>
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {notification.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {notification.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        
      </CardFooter>
    </Card>
  )
}