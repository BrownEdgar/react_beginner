import { useLoaderData } from 'react-router';

export type LoaderData = {
  message: string;
  timestamp: number;
  items: string[];
};

export default function LoaderExample() {
  const data = useLoaderData() as LoaderData;

  return (
    <div>
      <h1>Пример react-router Loader</h1>
      <p>Данные загружены до рендера страницы через <code>loader</code>.</p>
      <ul>
        <li><strong>message:</strong> {data.message}</li>
        <li><strong>timestamp:</strong> {new Date(data.timestamp).toLocaleString()}</li>
        <li><strong>items:</strong> {data.items.join(', ')}</li>
      </ul>
    </div>
  );
}
