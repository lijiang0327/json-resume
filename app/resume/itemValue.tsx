import { FC } from "react";

export type ItemValueProps = {
  value: unknown;
  type: unknown;
};

export const ItemValue: FC<ItemValueProps> = ({ value, type }) => {
  const isStringArray =
    Array.isArray(type) &&
    (typeof type[0] === "string" || typeof type[0] === "number");
  const isObjectArray = Array.isArray(type) && typeof type[0] === "object";
  const isObject = !Array.isArray(type) && typeof type === "object";

  return (
    <>
      {isStringArray && (
        <ul>
          {(value as string[]).map((v) => {
            return (
              <div className="pl-8 mt-2" key={v}>
                {v}
              </div>
            );
          })}
        </ul>
      )}

      {isObject && (
        <div className="mt-2 pl-8">
          {Object.keys(type as Record<string, unknown>).map((key) => {
            const v = (value as Record<string, string>)[key];

            return (
              <div key={key}>
                <span className="font-bold">{key}:</span>
                <span>{v}</span>
              </div>
            );
          })}
        </div>
      )}

      {isObjectArray && (
        <div className="mt-2">
          {(value as Record<string, unknown>[]).map((v, index) => {
            const t = type[0];

            return (
              <div key={index} className="mt-2 pl-8">
                {Object.keys(t).map((tk) => {
                  return (
                    <div key={tk}>
                      <span className="font-bold">{tk}: </span>
                      <span>{v[tk] as string}</span>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};
