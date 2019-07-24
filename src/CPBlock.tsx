/**
 * @namespace CPBlock
 * @author burning <www.codepie.net>
 * @version 2019.07.24
 */

import React, { PureComponent, ReactNode } from 'react'
import classNames from 'classnames'
// import './CPBlock.less'

const CLASS_NAME = 'cp-block'

export interface CPBlockProps {
  className?: String;
  children?: ReactNode;
  extra?: ReactNode;
  footer: ReactNode;
  title?: ReactNode;
}

class CPBlock extends PureComponent<CPBlockProps, {}> {
  render() {
    const { children, className, extra, footer, title } = this.props

    return (
      <div className={classNames(CLASS_NAME, className)}>
        {extra || title ? (
          <div className={`${CLASS_NAME}-header`}>
            {title ? <h3 className={`${CLASS_NAME}-title`}>{title}</h3> : null}
            {extra ? <div className={`${CLASS_NAME}-extra`}>{extra}</div> : null}
          </div>
        ) : null}

        <div className={`${CLASS_NAME}-body`}>
          {children}
        </div>

        {footer ? <div className={`${CLASS_NAME}-footer`}>{footer}</div> : null}
      </div>
    )
  }
}

export default CPBlock
