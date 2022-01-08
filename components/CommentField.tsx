import { Popover, OverlayTrigger, Form, FormControl, Button } from "react-bootstrap";

export const CommentField = () => {
    
  const handleComment = (e: any) => {
    e.preventDefault();

  };
    return (
      <Form className="d-flex" onSubmit={handleComment}>
        <FormControl
          type="search"
          placeholder="Bình luận"
          className="me-2"
          aria-label="Comment"
          id="comment"
          name="comment"
        />
        <Button
          variant="outline-primary"
          type="submit"
        >
          Comment
        </Button>
      </Form>
    )
};