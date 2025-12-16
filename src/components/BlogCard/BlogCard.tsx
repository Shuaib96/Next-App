import Image from "next/image";

interface BlogProps {
  blog: {
    title: string;
    date: string;
    readTime: string;
    comments: string;
    description: string;
    image: string;
  };
}

export default function BlogCard({ blog }: BlogProps) {
  return (
    <div className="flex gap-6 border-b pb-6">
      {/* Image */}
      <div className="w-32 h-24 relative shrink-0">
        <Image
          src='/blog.jpg'
          alt={blog.title}
          fill
          className="object-cover rounded-md"
        />
      </div>

      {/* Content */}
      <div>
        <h2 className="text-xl font-semibold mb-1 cursor-pointer">
          {blog.title}
        </h2>

        <p className="text-sm text-gray-500 mb-2">
          {blog.date} · {blog.comments}
        </p>

        <p className="text-gray-600 mb-2 line-clamp-1">{blog.description}</p>

        <span className="text-green-600 font-medium cursor-pointer">
          Read more →
        </span>
      </div>
    </div>
  );
}
