import PetContainer from '../components/PetContainer';

export default function PlayPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-display font-bold text-center mb-12">
          Play with Your <span className="text-primary">TinyMinyMo</span>
        </h1>
        <PetContainer />
      </div>
    </div>
  );
} 