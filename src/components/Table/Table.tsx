
interface TableProp {
  header: string[];
  body: string[][];
}

function Table({ header, body }: TableProp) {
  return (
    <table className="w-full">
      <thead>
        <tr className="w-full">
            {header.map((text, i) => (
                <th key={i} className="pl-3 pr-10 py-4 text-xl font-medium border-b border-neutral-300 text-neutral-700">{text}</th>
            ))}
        </tr>
      </thead>
      <tbody>
        {body.map((content, i) => (
            <tr key={i} className="w-full">
            {content.map((text,i) => (
                <td key={i} className="mdl:pl-3 mdl:pr-10 py-4 text-sm font-light border-b border-neutral-300">{text}</td>
            ))}
            </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
