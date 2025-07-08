import { Star , CheckCircle} from "lucide-react";

interface Props {
  testimony: {
    name: string;
    text: string;
  };
}

const TestimonialCard: React.FC<Props> = ({ testimony }) => {
  return (
        <div className="flex-none w-[300px] md:w-[380px] mx-4 ">
          <div className="bg-white rounded-xl p-6 shadow-sm border  border-gray-100 hover:shadow-md transition-all duration-300 h-full">
            <div className="flex gap-1 mb-4">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            </div>
        
            <div className="flex items-center gap-3 mb-4">
              <span className="font-semibold font-al text-lg text-gray-900">{testimony.name}</span>
              <CheckCircle className="w-5 h-5 text-white fill-green-500" />
            </div>
        
            <p className="text-[rgba(0,0,0,.5)] leading-relaxed text-base font-al">
            {testimony.text}
            </p>
          </div>
        </div>
  );
};

export default TestimonialCard;