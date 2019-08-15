import React, { useState, useEffect, useRef, useCallback, useReducer } from "react";
import { Button, Input, Timeline, message } from "antd";

interface DataObj {
  name: string;
}

interface ReduceState {
  count: number | undefined;
  step: number | undefined;
}

interface ReduceAction {
  type: string,
  count?: number | undefined;
  step?: number | undefined;
}



export interface DemoProps {
  cvalue: string;
  count: number;
  dataSource: DataObj[];
}

const Demo: React.FunctionComponent<DemoProps> = props => {
  const { count, dataSource, cvalue } = props;
  // Keep track of the latest value.
  const latestMessage = useRef("");
  const latestCount = useRef(0);
  const [scount, setCount] = useState(count || 0);
  // eslint-disable-next-line prettier/prettier
  const [data, setData] = useState<DataObj[]>([]);

  // useCallback包一层,保证函数调用唯一性，避免重复调用，同时，采用latestCount, useRef()，时刻获取最新数据
  const showMessage = useCallback(() => {
    console.log(latestCount.current);
    const lcount = latestCount.current;
    if (lcount && !(lcount % 10)) {
      message.warning("添加条数超过" + lcount);
    }    
  }, [latestCount]);

  useEffect(() => {
    latestMessage.current = cvalue;
    latestCount.current = scount;
  }, [cvalue, scount]);

  useEffect(() => {
    showMessage();
    setCount(count);
    setData(dataSource);
  }, [count, dataSource, showMessage]);

  const getState = () => {
    setTimeout(() => message.info(`
      最新输入值: 
      cvalue: ${cvalue},
      lastValue: ${latestMessage.current}
    `), 3000);
  };
  // console.log(2);
  return (
    <div>
      <h3>
        <b>total: </b>
        {scount}
      </h3>
      <Button style={{ marginBottom: 16 }} onClick={getState}>2s后获取输入最新值</Button>
      <Timeline>
        {data.length
          ? data.map((item, i) => <Timeline.Item key={i + item.name}>{item.name}</Timeline.Item>)
          : null}
      </Timeline>
    </div>
  );
};

const initialState:ReduceState = {
  count: 0,
  step: 1,
};

function reducer(state:ReduceState, action:ReduceAction):ReduceState {
  const { count, step } = state;
  if (action.type === "tick") {
    const lastCount = ((count || count === 0) && (step || step === 0)) ? count + step : 0;
    return { count: lastCount, step };
  } else if (action.type === "step") {
    return { count, step: action.step };
  } else {
    throw initialState;
  }
}

function Counter () {
  // const [count, setCount] = useState(0);
  // const [step, setStep] = useState(1);

  // useEffect(() => {
  //   const id = setInterval(() => {
  //     setCount(c => c + step);
  //   }, 1000);
  //   return () => clearInterval(id);
  // }, [step]);

  // return (
  //   <div>
  //     <h1>{count}</h1>
  //     <input value={step} onChange={e => setStep(Number(e.target.value))} />
  //   </div>
  // );

  // 如果不想重启effect， 使用useReduce, React会保证dispatch在组件的声明周期内保持不变

  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);
    return () => clearInterval(id);
  }, [dispatch]);

  return (
    <>
      <h1>{count}</h1>
      <input value={step} type="number" onChange={e => {
        dispatch({
          type: "step",
          step: Number(e.target.value)
        });
      }} />
    </>
  );
}

const EffectDemo: React.FunctionComponent<{}> = () => {
  const [value, setValue] = useState("");
  const [scount, setCount] = useState(0);
  const [data, setData] = useState<DataObj[]>([]);

  const handleClick = () => {
    const o = { name: value };
    setData(d => [...d, o]);
    setCount(c => c + 1);
  };

  // console.log(1);

  return (
    <div className="effect-demo">
      <div>
        <Input allowClear value={value} onChange={e => setValue(e.target.value)} placeholder="请输入"></Input>
        <Button style={{ marginTop: 16 }} icon="plus" type="primary" onClick={handleClick}>
          添加
        </Button>
      </div>
      <Counter></Counter>
      <Demo count={scount} dataSource={data} cvalue={value}></Demo>
    </div>
  );
};

export default EffectDemo;
