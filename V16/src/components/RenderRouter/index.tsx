import * as React from 'react';
import { Switch, Route, Redirect, withRouter, RouteComponentProps } from 'react-router-dom';
import { RouterProps, RenderRouterProps } from '@/utils/TS/interface';

interface Props extends RenderRouterProps<Record<string, any>>, RouteComponentProps {}

class RenderRouter<T> extends React.Component<Props, {}> {
  requireLogin = (component: React.ReactNode, props: RouterProps<T>) => {
    if (props.redirectUrl) {
      return <Redirect to={props.redirectUrl} />;
    }
    return component;
  };
  render() {
    const { routers } = this.props;
    const { children, isNeedShow, path } = routers;
    const childRouters = children || [];

    if (!childRouters.length) return null;

    return (
      <Switch>
        {isNeedShow ? <Route exact path={path} render={() => null} /> : null}
        {childRouters.map((item, index) => {
          const ComponentPage = item.component;
          return (
            <Route
              exact={item.exact}
              path={item.path}
              render={(props) =>
                this.requireLogin(<ComponentPage {...props} routers={item}></ComponentPage>, item)
              }
              key={'page' + index + item.path}
            />
          );
        })}
        {/* 处理当前routers 不存在路由 */}
        <Route render={() => <Redirect to="/404" />} />
      </Switch>
    );
  }
}

export default withRouter(RenderRouter);
