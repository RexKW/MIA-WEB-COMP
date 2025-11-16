import { Eye, Play } from "lucide-react";

export function ShopMediaCard({ video }: { video: Video }) {
  return (
    <div className="bg-white rounded-2xl border border-[#46C4FF33] shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer w-full">
      <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />

        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all flex items-center justify-center">
          <div className="bg-white rounded-full p-3 opacity-0 hover:opacity-100 transform scale-75 hover:scale-100 transition-all shadow-md">
            <Play className="w-6 h-6 text-emerald-600" />
          </div>
        </div>

        <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
          {video.duration}
        </div>
      </div>

      <div className="p-3">
        <h3 className="font-semibold text-gray-800 text-sm line-clamp-2 mb-2">
          {video.title}
        </h3>
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <Eye className="w-3 h-3" />
          <span>{video.views} views</span>
        </div>
      </div>
    </div>
  );
}
