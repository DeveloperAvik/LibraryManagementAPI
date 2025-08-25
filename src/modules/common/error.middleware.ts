import { Request, Response, NextFunction } from "express";

export const notFound = (_req: Request, res: Response) => {
    return res.status(404).json({
        success: false,
        message: "Route not found",
        data: null,
    });
};

export const errorHandler = (err: any, req: Request, res: Response) => {
    if (err?.name === "ValidationError") {
        return res.status(400).json({
            message: "Validation failed",
            success: false,
            error: err,
        });
    }

    if (err?.name === "CastError") {
        return res.status(400).json({
            message: "Validation failed",
            success: false,
            error: { name: "CastError", message: "Invalid ID format", path: err.path, value: err.value },
        });
    }

    if (err?.code === 11000) {
        return res.status(400).json({
            message: "Validation failed",
            success: false,
            error: err,
        });
    }

    return res.status(500).json({
        message: "Internal server error",
        success: false,
        error: { message: err?.message || "Something went wrong" },
    });
};
