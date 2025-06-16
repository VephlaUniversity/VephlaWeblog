import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CategoryCard = ({
  category,
  title,
  description,
  categoryColor,
  image,
  delay = 0,
  link = "#",
}) => {
  return (
    <Link
      to={link}
      className="glass-card p-8 hover:scale-105 transition-all duration-500 cursor-pointer glow-effect group animate-float block"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Image Container with Gray Background */}
      <div className="relative mb-8 h-64 flex items-center justify-center">
        <div className="w-40 h-40 bg-gray-600 rounded-2xl flex items-center justify-center shadow-2xl">
          <img
            src={image}
            alt={category}
            className="w-24 h-24 object-contain"
          />
        </div>
      </div>

      {/* Category Label */}
      <div className="mb-4">
        <span
          className="text-sm font-semibold px-3 py-1 rounded-full"
          style={{ color: categoryColor }}
        >
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <h3 className="text-2xl font-bold text-white leading-tight flex-1 pr-4">
            {title}
          </h3>
          <ArrowRight className="h-6 w-6 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 mt-1" />
        </div>

        <p className="text-gray-400 leading-relaxed">{description}</p>
      </div>
    </Link>
  );
};

export default CategoryCard;
