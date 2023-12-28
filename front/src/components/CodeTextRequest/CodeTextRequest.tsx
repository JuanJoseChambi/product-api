
interface CodeTextProp {
  url:string;
  request:string;
}

function CodeTextRequest({url, request}:CodeTextProp) {
  return (
    <pre className="code ">
      <code className=" space-x-2">
        <span className="text-greenCode font-bold">{request}</span>
        <span className="text-grayCode font-bold">{url}</span>
      </code>
    </pre>
  )
}

export default CodeTextRequest
