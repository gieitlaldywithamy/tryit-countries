export const ErrorMessage = ({ error }: { error?: string }) => {
  if (!error) {
    return null;
  }
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative m-4">
      <strong className="font-bold">Error:</strong>
      <span className="block sm:inline ml-2">{error}</span>
    </div>
  );
};
