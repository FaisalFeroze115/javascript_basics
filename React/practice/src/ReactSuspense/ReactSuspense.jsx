import { Suspense, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import PostSelector from "./components/PostSelector";
import Comments from "./components/Comments";
import "./ReactSuspense.css";

const ReactSuspense = () => {

  const [selectedPostId, setSelectedPostId] = useState(null);

  const handleSelectPost = (e) => {
      setSelectedPostId(e.target.value);
  };


  return (
        <div>
            <h1>React Suspense and Error Boundaries</h1>

            <div>
                <ErrorBoundary
                    fallback={
                        <h1 className="error">There was an error occured!</h1>
                    }
                >
                    <Suspense fallback={<h1>Loading posts...</h1>}>
                        <PostSelector onSelectPost={handleSelectPost} />
                    </Suspense>

                    {selectedPostId && (
                        <ErrorBoundary
                            fallback={
                                <h1 className="error">
                                    There was an error fetching comments
                                </h1>
                            }
                        >
                            <Suspense fallback={<h1>Loading comments...</h1>}>
                                <Comments postId={selectedPostId} />
                            </Suspense>
                        </ErrorBoundary>
                    )}
                </ErrorBoundary>
            </div>
        </div>
  )
}

export default ReactSuspense