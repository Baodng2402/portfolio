import { Link } from "react-router-dom";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  href?: string;
  tags?: string[];
}

const ProjectCard = ({
  image,
  title,
  description,
  href = "#",
  tags = [],
}: ProjectCardProps) => {
  return (
    <Link
      to={href}
      className="group block bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10"
    >
      {/* Image */}
      <div className="relative h-40 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-white/60 line-clamp-2 mb-3">{description}</p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
};

export default ProjectCard;
