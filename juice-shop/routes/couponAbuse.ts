import type { Request, Response } from 'express'
import * as challengeUtils from '../lib/challengeUtils'
import { challenges } from '../data/datacache'

export function applyCouponAbuse () {
  return async (req: Request, res: Response) => {
    const discount = Number(req.body?.discount)

    // ❌ Vulnerability: trusting client-side discount
challengeUtils.solveIf(
  (challenges as any).couponAbuseChallenge,
  () => discount >= 100
)
    return res.json({
      success: true,
      totalPrice: 0,
      message: 'Coupon applied'
    })
  }
}